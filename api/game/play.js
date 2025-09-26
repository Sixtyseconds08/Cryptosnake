export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fid, username } = req.body

    // TODO: masukkan logika Supabase di sini
    // contoh:
    // await supabase.from('users').upsert({ farcaster_id: fid, username })

    res.status(200).json({ ok: true, message: 'Game dimulai', fid, username })
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
