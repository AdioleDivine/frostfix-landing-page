import { NextApiRequest, NextApiResponse } from "next";

type Data = {
    message?: string;
    error?: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    if (req.method === "POST") {
        const { fullName, email, message } = req.body;

        if (!fullName || !email || !message) {
            return res.status(400).json({ error: "Missing fields" });
        }

        const API_URL = process.env.NEXT_PUBLIC_API_URL;

        try {
            const response = await fetch(`${API_URL}/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullName,
                    email,
                    message,
                }),
            });

            // if there's an error with the request (e.g. 404, 500), throw an error
            if (response.status === 404 || response.status === 500) {
                throw new Error(
                    "Page not found or server error. Please try again."
                );
            }

            const data = await response.json();
            console.log("Data", data);

            if (data.error) {
                throw new Error(data.error.message);
            }

            res.status(200).json({ message: "Email sent successfully!" });
        } catch (err: any) {
            res.status(404 | 500).json({ error: err.message });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
};
