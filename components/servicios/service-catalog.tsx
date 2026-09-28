"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  ChevronDown,
  Gift,
  Sparkles,
} from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { serviceSections } from "@/lib/service-catalog"

export function ServiceCatalog({ initialServiceId }: { initialServiceId?: string }) {
  const [openSections, setOpenSections] = useState(() => [
    serviceSections.some((section) => section.id === initialServiceId)
      ? initialServiceId!
      : "fisioterapia-integral",
  ])

  useEffect(() => {
    let scrollTimer: ReturnType<typeof setTimeout> | undefined

    const openLinkedService = () => {
      const id = initialServiceId ?? window.location.hash.slice(1)
      if (!serviceSections.some((section) => section.id === id)) return

      setOpenSections([id])
      clearTimeout(scrollTimer)
      // Wait for the accordion layout to settle before positioning the linked service.
      scrollTimer = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ block: "start" })
      }, 300)
    }

    openLinkedService()
    window.addEventListener("hashchange", openLinkedService)
    return () => {
      clearTimeout(scrollTimer)
      window.removeEventListener("hashchange", openLinkedService)
    }
  }, [initialServiceId])

  return (
    <section className="border-b border-border/50 bg-transparent py-16 lg:py-24">
      <div className="mx-auto max-w-6xl overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-[22rem] sm:max-w-3xl lg:mb-14">
          <span className="text-xs font-extrabold uppercase text-primary">
            Cinco líneas de atención
          </span>
          <h2 className="mt-3 break-words font-heading text-3xl font-black text-foreground sm:text-4xl">
            Un servicio para cada etapa de tu proceso
          </h2>
          <p className="mt-4 break-words text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">
            Evaluamos cada caso para recomendar el nivel de atención, la frecuencia y el plan más
            adecuados según tus objetivos clínicos y funcionales.
          </p>
        </div>

        <Accordion type="multiple" value={openSections} onValueChange={setOpenSections} className="space-y-5">
          {serviceSections.map((section, index) => {
            const Icon = section.icon
            const imageFirst = index % 2 === 1

            return (
              <AccordionItem
                key={section.id}
                value={section.id}
                id={section.id}
                className="scroll-mt-28 overflow-hidden rounded-lg border border-border/70 bg-white/95 shadow-sm transition-shadow data-[state=open]:shadow-premium"
              >
                <AccordionTrigger className="group px-4 py-4 hover:no-underline sm:px-5 lg:px-6">
                  <div className="flex min-w-0 flex-1 items-center gap-4 pr-2 sm:gap-5">
                    <div className="hidden h-20 w-28 shrink-0 overflow-hidden rounded-lg border border-white shadow-sm sm:block">
                      <Image
                        src={section.image}
                        alt={section.imageAlt}
                        width={224}
                        height={160}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg sm:h-12 sm:w-12 ${section.iconClass}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1 text-left">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="text-xs font-black text-primary">{section.number}</span>
                        <h3 className="font-heading text-lg font-black text-foreground sm:text-xl">
                          {section.title}
                        </h3>
                      </div>
                      <p className="mt-1 text-xs font-semibold leading-relaxed text-muted-foreground sm:text-sm">
                        {section.summary}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="border-t border-border/60 px-4 pb-7 pt-6 sm:px-6 lg:px-8 lg:pb-9">
                  <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
                    <div
                      className={`relative min-h-[250px] overflow-hidden rounded-lg border-4 border-white shadow-premium sm:min-h-[320px] lg:col-span-5 ${
                        imageFirst ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <Image
                        src={section.image}
                        alt={section.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 430px"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${section.accentClass} opacity-35`} />
                      <div className="absolute inset-x-4 bottom-4 rounded-lg border border-white/20 bg-primary/80 p-4 text-white shadow-xl backdrop-blur-sm">
                        <p className="text-xs font-black uppercase tracking-wide text-white/75">
                          {section.number}
                        </p>
                        <p className="mt-1 font-heading text-lg font-black leading-tight">
                          {section.title}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`flex flex-col justify-center rounded-lg border border-border/70 bg-secondary/35 p-5 sm:p-6 lg:col-span-7 lg:p-8 ${
                        imageFirst ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${section.iconClass}`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs font-extrabold uppercase text-primary">
                            Línea de atención
                          </p>
                          <h4 className="font-heading text-xl font-black text-foreground sm:text-2xl">
                            {section.title}
                          </h4>
                        </div>
                      </div>
                      <p className="mt-5 max-w-3xl break-words text-sm font-medium leading-7 text-muted-foreground sm:text-base">
                        {section.description}
                      </p>
                    </div>
                  </div>

                  <Collapsible className="mt-6">
                    <CollapsibleTrigger className="group inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#1667B7] bg-[#1667B7] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:border-[#125799] hover:bg-[#125799] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1667B7] focus-visible:ring-offset-2">
                      <span className="group-data-[state=open]:hidden">Leer más</span>
                      <span className="hidden group-data-[state=open]:inline">Leer menos</span>
                      <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-6 space-y-10">
                    {section.groups.map((group) => (
                      <div key={group.title}>
                        <div className="flex items-center gap-3">
                          <span className="h-px w-8 bg-[#E63946]" />
                          <h4 className="font-heading text-base font-black text-foreground sm:text-lg">
                            {group.title}
                          </h4>
                        </div>

                        <div className="mt-4 grid gap-4 md:grid-cols-2">
                          {group.offerings.map((offering) => (
                            <article
                              key={offering.title}
                              className="rounded-lg border border-border/70 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-premium"
                            >
                              <h5 className="font-heading text-sm font-extrabold text-foreground sm:text-base">
                                {offering.title}
                              </h5>
                              <p className="mt-2 text-sm font-medium leading-6 text-muted-foreground">
                                {offering.description}
                              </p>
                              <p className="mt-3 text-xs font-bold leading-5 text-[#1667B7]">
                                Objetivo clínico: {offering.objective}
                              </p>
                              {offering.note && (
                                <p className="mt-2 text-xs font-semibold italic text-muted-foreground">
                                  {offering.note}
                                </p>
                              )}
                            </article>
                          ))}
                        </div>

                        {group.benefits && (
                          <div className="mt-5 rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-5">
                            <div className="flex items-center gap-3">
                              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
                                <Check className="h-4 w-4 stroke-[3]" />
                              </span>
                              <p className="text-xs font-extrabold uppercase text-foreground">
                                Beneficios adicionales
                              </p>
                            </div>
                            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                              {group.benefits.map((benefit) => (
                                <li
                                  key={benefit}
                                  className="flex items-start gap-2.5 text-sm font-semibold leading-5 text-muted-foreground"
                                >
                                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-600">
                                    <Check className="h-3 w-3 stroke-[3]" />
                                  </span>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                    </CollapsibleContent>
                  </Collapsible>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>

        <div className="mt-8 overflow-hidden rounded-lg border border-primary/15 bg-white shadow-premium">
          <div className="grid gap-0 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="p-5 sm:p-6 lg:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#E63946]/10 text-[#E63946]">
                  <Gift className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-extrabold uppercase text-primary">
                    Bonos y tarjetas de regalo
                  </p>
                  <h3 className="mt-1 font-heading text-2xl font-black text-foreground">
                    Regala una consulta, un pack o un bono abierto
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm font-medium leading-6 text-muted-foreground sm:text-base">
                    Crea una tarjeta personalizada con el nombre de la persona, el servicio que
                    quieres regalar y un mensaje corto. La tarjeta se descarga como imagen y la
                    compra se confirma por WhatsApp.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-border/70 p-5 sm:p-6 lg:border-l lg:border-t-0 lg:p-8">
              <Link
                href="/tarjetas-regalo"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/15 transition hover:-translate-y-0.5 hover:bg-primary/95 lg:w-auto"
              >
                Crear tarjeta
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-3 border-l-2 border-primary pl-4 text-sm font-semibold leading-6 text-muted-foreground">
          <Sparkles className="h-5 w-5 shrink-0 text-primary" />
          La recomendación final de servicio se define después de conocer tu caso y tus objetivos.
        </div>
      </div>
    </section>
  )
}
