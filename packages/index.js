(async () => {
    globalThis.pyow = await loadPyodide();

    document.querySelectorAll("script[type='text/python']").forEach(el => {
        const code = el.innerText;

        globalThis.pyow.runPython(code);
    })
})()