export async function GET(request) {
  try {
    const ipAddress =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("cf-connecting-ip") ||
      request.headers.get("x-real-ip") ||
      request.headers.get("fastly-client-ip") ||
      request.headers.get("true-client-ip") ||
      request.headers.get("x-proxy-user-ip") ||
      request.headers.get("x-cluster-client-ip") ||
      request.headers.get("forwarded-for") ||
      request.headers.get("forwarded") ||
      request.headers.get("socket-client-ip") ||
      request.headers.get("request-client-ip") ||
      request.headers.get("client-ip") ||
      request.headers.get("x-client-ip");

    if (!ipAddress) {
      throw new Error("Unable to retrieve client IP address.");
    }

    return new Response(JSON.stringify({ ip: ipAddress }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message, ip: "COULD NOT RESOLVE" }),
      {
        status: 500,
      }
    );
  }
}
