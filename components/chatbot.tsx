"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import type { FormEvent } from "react"
import { Bot, Send, X } from "lucide-react"

type ChatMessage = {
  id: string
  role: "user" | "bot"
  text: string
}

function createId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID()
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "bot",
      text: "Hola, soy el asistente de Humanos Fisioterapia. En que puedo ayudarte?",
    },
  ])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const sessionId = useMemo(() => {
    if (typeof window === "undefined") return "humanosrehab-web"

    const key = "humanosrehab_chat_session"
    const currentSession = window.localStorage.getItem(key)

    if (currentSession) return currentSession

    const newSession = `web-${createId()}`
    window.localStorage.setItem(key, newSession)
    return newSession
  }, [])

  useEffect(() => {
    if (!isOpen) return
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [isOpen, messages])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const message = inputValue.trim()
    if (!message || isLoading) return

    setMessages((currentMessages) => [
      ...currentMessages,
      { id: createId(), role: "user", text: message },
    ])
    setInputValue("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, sessionId }),
      })

      const data = await response.json().catch(() => ({}))
      const reply =
        data.reply ||
        data.response ||
        data.text ||
        data.message ||
        "Gracias por escribirnos. Me compartes un poco mas de contexto?"

      setMessages((currentMessages) => [
        ...currentMessages,
        { id: createId(), role: "bot", text: reply },
      ])
    } catch {
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: createId(),
          role: "bot",
          text: "No pude conectar con el asistente en este momento. Intenta de nuevo o escribenos por WhatsApp.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className="fixed bottom-24 right-6 z-50 group">
        <button
          type="button"
          aria-label={isOpen ? "Cerrar chatbot" : "Abrir chatbot"}
          onClick={() => setIsOpen((currentValue) => !currentValue)}
          className="flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-white bg-[#1E8CFF] text-white shadow-[0_12px_30px_rgba(30,140,255,0.48)] transition-all duration-300 hover:scale-110 hover:bg-[#39A0FF] hover:shadow-[0_14px_36px_rgba(30,140,255,0.62)]"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
        </button>

        <div className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
          <div className="whitespace-nowrap rounded-md bg-[#1E8CFF] px-3 py-1.5 text-xs font-medium text-white shadow-lg shadow-[#1E8CFF]/30">
            Asistente virtual
          </div>
        </div>
      </div>

      {isOpen && (
        <section
          aria-label="Chat de Humanos Fisioterapia"
          className="fixed bottom-44 right-4 z-50 flex h-[560px] max-h-[calc(100vh-12rem)] w-[calc(100vw-2rem)] max-w-[380px] flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-2xl shadow-primary/15 sm:right-6"
        >
          <header className="flex items-center justify-between bg-primary px-4 py-3 text-primary-foreground">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                <Bot className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold">Humanos Rehab</p>
                <p className="text-xs text-primary-foreground/80">Asistente virtual</p>
              </div>
            </div>
            <button
              type="button"
              aria-label="Cerrar chat"
              onClick={() => setIsOpen(false)}
              className="rounded-md p-1 text-primary-foreground/80 transition hover:bg-white/10 hover:text-primary-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto bg-secondary/40 px-4 py-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[84%] rounded-2xl px-4 py-2 text-sm leading-relaxed shadow-sm ${
                    message.role === "user"
                      ? "rounded-br-md bg-primary text-primary-foreground"
                      : "rounded-bl-md border border-border bg-white text-foreground"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1 rounded-2xl rounded-bl-md border border-border bg-white px-4 py-3 shadow-sm">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-accent" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-accent delay-100" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-accent delay-200" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2 border-t border-border bg-white p-3">
            <input
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              placeholder="Escribe tu mensaje..."
              disabled={isLoading}
              className="min-w-0 flex-1 rounded-xl border border-input bg-white px-3 py-2 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/15 disabled:opacity-60"
            />
            <button
              type="submit"
              aria-label="Enviar mensaje"
              disabled={isLoading || !inputValue.trim()}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </section>
      )}
    </>
  )
}
