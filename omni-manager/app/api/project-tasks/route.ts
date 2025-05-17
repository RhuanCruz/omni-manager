export function GET(request: Request) {
    console.log("Request to create a new project");
    return new Response(JSON.stringify({ message: "Request to create a new project task", status: 200 }), {
        status: 200,
        headers: {
        "Content-Type": "application/json",
        },
    });
}