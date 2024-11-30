import React from "react";

export default function inputMaskNumber(e: string) {
    const valueMask = e.replace(/\D/g, "");
    const valueMasked = valueMask.replace(/(\d{1,})(\d{2})$/, "$1,$2");
    return valueMasked
}