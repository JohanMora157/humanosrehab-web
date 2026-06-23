"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import type { FormEvent } from "react"
import { Bot, Send, X } from "lucide-react"
import { buildHumanosWhatsAppUrl, parseBotResponse } from "@/lib/chatbot-response"

type ChatMessage = {
  id: string
  role: "user" | "assistant"
  text: string
  cta?: {
    type: "whatsapp"
    buttonText: string
    url: string
    whatsappMessage: string
  }
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
      role: "assistant",
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
      const rawReply =
        data.reply ||
        data.response ||
        data.text ||
        data.message ||
        "Gracias por escribirnos. Me compartes un poco mas de contexto?"
      const parsedReply = parseBotResponse(rawReply)

      setMessages((currentMessages) => [
        ...currentMessages,
        parsedReply.kind === "whatsapp_cta"
          ? {
              id: createId(),
              role: "assistant",
              text: parsedReply.message,
              cta: {
                type: "whatsapp",
                buttonText: parsedReply.buttonText,
                url: buildHumanosWhatsAppUrl(parsedReply.whatsappMessage),
                whatsappMessage: parsedReply.whatsappMessage,
              },
            }
          : { id: createId(), role: "assistant", text: parsedReply.message },
      ])
    } catch {
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: createId(),
          role: "assistant",
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
                  {message.text && <p className="whitespace-pre-wrap">{message.text}</p>}
                  {message.cta?.type === "whatsapp" && (
                    <a
                      href={message.cta.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-3 py-2 text-xs font-bold text-white shadow-sm shadow-[#25D366]/20 transition hover:bg-[#1E9A4D]"
                    >
                      <svg
                        className="h-4 w-4 fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      {message.cta.buttonText}
                    </a>
                  )}
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
