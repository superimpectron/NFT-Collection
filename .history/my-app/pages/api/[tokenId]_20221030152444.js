export default function handler(req, res) {
    const tokenId = req.query.tokenId;
    const image_url = "";

    res.status(200).json({
        name: "Crypto Dev #" + tokenId,
        description: "Crypto Dev is My Collection of Developers in Crypto",
        image: image_url + tokenId + ".svg",
    });
    
}