import { useEffect, useState } from "react";
import Close from "../assets/svg/Close";

const ModalExplanation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => setIsOpen(!isOpen);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [isOpen]);

    return (
        <div className="relative">
            <button
                onClick={toggleModal}
                className="w-full px-6 py-2 font-semibold text-black bg-white hover:bg-gray-200 rounded-xl"
            >
                Pedir Explicaciones
            </button>

            {/* Modal Explanation */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black p-6 bg-opacity-60">
                    <div className="relative w-full p-6 bg-white text-black rounded-lg shadow-lg max-w-[60rem]">
                        <button
                            onClick={toggleModal}
                            className="absolute w-16 h-16 right-2 top-2"
                        >
                            <Close />
                        </button>

                        <strong>Recuerda:</strong>

                        <div className="grid grid-cols-2">
                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <strong className="col-span-2">Tamaños</strong>
                                <p>text-xs = 12px</p>
                                <p>text-sm = 14px</p>
                                <p>text-base = 16px</p>
                                <p>text-lg = 18px</p>
                                <p>text-xl = 20px</p>
                                <p>text-2xl = 24px</p>
                                <p>text-3xl = 30px</p>
                                <p>text-4xl = 36px</p>
                                <p>text-5xl = 48px</p>
                                <p>text-6xl = 60px</p>
                                <p>text-7xl = 72px</p>
                                <p>text-8xl = 96px</p>
                                <p>text-9xl = 128px</p>
                            </div>

                            <div className="flex flex-col gap-2 text-xs">
                                <strong className="col-span-2">Responsive</strong>
                                <p>menor a 640 no se usa ninguna clase</p>
                                <p>sm desde 640px</p>
                                <p>md desde 768px</p>
                                <p>lg desde 1024px</p>
                                <p>xl desde 1280px</p>
                                <p>2xl desde 1536px</p>
                            </div>

                            <div className="flex flex-col col-span-2 gap-2 text-xs text-center">
                                <strong className="">Ejemplo:</strong>
                                <p>text-3xl lg:text-8xl</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalExplanation;




