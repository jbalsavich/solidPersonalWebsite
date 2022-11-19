//when there is a request to the /api/time route, this function will be called and the time will be returned
const time = (req, res) => {
    res.json({ time: Date.now() });
};

export default time;
export function GET() {
    return new Response(JSON.stringify({ time: Date.now() }), {
        headers: { "content-type": "application/json" },
    });

}

export function POST() {
    return new Response(JSON.stringify({ time: Date.now() }), {
        headers: { "content-type": "application/json" },
    });
}

export function PATCH() {
    return new Response(JSON.stringify({ time: Date.now() }), {
        headers: { "content-type": "application/json" },
    });
}
