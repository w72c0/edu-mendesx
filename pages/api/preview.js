export default function handler(req, res) {
  res.setPreviewData({});

  const key = 'BIRMAN';

  if (req.query.key !== key) {
    res.clearPreviewData({});
    return res.status(401).json({ message: 'Invalid Key to enable preview' });
  }

  res.writeHead(307, { location: '/' });

  return res.end();
}
