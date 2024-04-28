import React from "react";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";


export default function myprojects() {
    return (
        <>
            <div>
                <p>MY WORK</p>
                <h4>RECENT PROJECT</h4>

                 <Card
                    isFooterBlurred
                    radius="lg"
                    className="border-none"
                >
                    <Image
                        alt="Woman listing to music"
                        className="object-cover"
                        height={200}
                        src="https://img.freepik.com/free-psd/business-people-working-with-laptop_53876-12025.jpg?t=st=1714283263~exp=1714286863~hmac=083165323104a4f9ebe047a63fbee85354e84f05cb177b6f817c895bf2616ede&w=740"
                        width={200}
                    />
                    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                        <p className="text-tiny text-white/80">Available soon.</p>
                        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                            Notify me
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </>
    );
}