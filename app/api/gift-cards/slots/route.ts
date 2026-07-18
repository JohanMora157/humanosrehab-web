import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const date = searchParams.get("date")

    if (!date) {
      return NextResponse.json({ error: "Falta el parámetro 'date'." }, { status: 400 })
    }

    const refreshToken = process.env.SETMORE_REFRESH_TOKEN || "r1/03f0103078VzjfJysXMMR6eBL6I-ej6F2KAimwyF4iCcf"

    // 1. Obtener token de acceso
    const tokenRes = await fetch(`https://developer.setmore.com/api/v1/o/oauth2/token?refreshToken=${refreshToken}`, {
      cache: "no-store",
    })

    if (!tokenRes.ok) {
      const errText = await tokenRes.text()
      console.error("Setmore token error:", errText)
      return NextResponse.json({ error: "No se pudo obtener el token de Setmore." }, { status: 502 })
    }

    const tokenData = await tokenRes.json()
    const accessToken = tokenData?.data?.token?.access_token

    if (!accessToken) {
      return NextResponse.json({ error: "Token de acceso no devuelto por Setmore." }, { status: 502 })
    }

    // 2. Consultar slots para el día especificado
    const slotsRes = await fetch("https://developer.setmore.com/api/v1/bookingapi/slots", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        staff_key: "r3a521b7621a69dac9eb715e2e237a6b32dd4f024",
        service_key: "e0c5a6ce-a32b-4d85-8468-dc619478a482",
        selected_date: date,
        off_hours: false,
      }),
      cache: "no-store",
    })

    if (!slotsRes.ok) {
      const errText = await slotsRes.text()
      console.error("Setmore slots error:", errText)
      return NextResponse.json({ error: "No se pudieron consultar los horarios de Setmore." }, { status: 502 })
    }

    const slotsData = await slotsRes.json()
    const rawSlots: string[] = slotsData?.data?.slots || []
    const slots = rawSlots.filter((slot) => slot.includes(":00") || slot.includes(":30"))

    return NextResponse.json({ slots })
  } catch (error) {
    console.error("Error in Setmore slots endpoint:", error)
    return NextResponse.json({ error: "Error interno al consultar horarios." }, { status: 500 })
  }
}
