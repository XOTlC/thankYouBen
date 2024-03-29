/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-var */
/* eslint-disable no-async-promise-executor */

enum Method {
    GET = "GET",
    HEAD = "HEAD",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    CONNECT = "CONNECT",
    OPTIONS = "OPTIONS",
    TRACE = "TRACE",
    PATCH = "PATCH"
}

const { fetch: originalFetch } = window;

const fetchInterceptor = (method: Method) => (url: string, body: JSON) => new Promise(async (resolve, reject) => {
    const response = await originalFetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    });

    try {
        var data = await response.json();
    } catch {
        var data = null;
    }

    if (!response.ok) reject({
        ok: false,
        status: response.status,
        data: data
    });
    else resolve({
        ok: true,
        status: response.status,
        data: data
    });
});

window.fetch = {
    get: fetchInterceptor(Method.GET),
    head: fetchInterceptor(Method.HEAD),
    post: fetchInterceptor(Method.POST),
    put: fetchInterceptor(Method.PUT),
    delete: fetchInterceptor(Method.DELETE),
    connect: fetchInterceptor(Method.CONNECT),
    options: fetchInterceptor(Method.OPTIONS),
    trace: fetchInterceptor(Method.TRACE),
    patch: fetchInterceptor(Method.PATCH)
} as any;