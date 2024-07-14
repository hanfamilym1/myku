
export async function POST(req: Request) {
    const { photoData: photo } = await req.json()
  console.log("photo", photo);

  return Response.json({ haiku: "yooo" });
}
