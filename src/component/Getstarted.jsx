import React, { useEffect } from "react";

const Getstarted = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//embed.typeform.com/next/embed.js";
        script.async = true;
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <div className="container p-8 m-auto justify-center justify-self-center text-center h-[100%] w-[100%]">
            <div data-tf-live="01HN5FZYP74G76ZKNQNJS05QB9"></div>
        </div>
    )

};


export default Getstarted