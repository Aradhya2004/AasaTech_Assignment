import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from './ui/button';

const faqs = [
    { question: "Who is this course for?", answer: "This course is perfect for beginners, hobbyists, and aspiring digital artists who want to learn digital illustration from scratch. No prior experience required!" },
    { question: "What tools do I need to take this course?", answer: "You'll need:\n- A tablet (iPad, Wacom, or any drawing tablet)\n- Digital art software (Procreate, Photoshop, or Krita)\n- A passion for creativity" },
    { question: "How long is the course?", answer: "The course runs for 4 weeks, with step-by-step lessons covering everything from sketching to advanced digital painting techniques." },
    { question: "Is this a live or recorded course?", answer: "The course includes both pre-recorded lessons and live Q&A sessions with industry experts for better interaction and support." },
    { question: "Will I receive a certificate?", answer: "Yes! After completing the course, you'll receive a Certificate of Completion, which can boost your portfolio and career opportunities." },
    { question: "Can I monetize my digital art after this course?", answer: "Absolutely! The course includes a bonus session on freelancing & selling your art so you can start earning right away." },
    { question: "What happens if I miss a live session?", answer: "No worries! All live sessions will be recorded and uploaded to your student dashboard for later viewing." },
    { question: "How do I apply the coupon code?", answer: "Once you sign up, you'll get 15 minutes to enter a valid coupon code to unlock exclusive bonuses." },
    { question: "What if I don’t have a tablet?", answer: "You can still take the course using a mouse & free digital art software (like Krita). However, a tablet is recommended for better results." },
    { question: "Is there a refund policy?", answer: "The ₹79 booking fee is non-refundable, but we’re confident you’ll love the course!" },
    { question: "How do I enroll?", answer: "Click the Enroll Now button, make the payment, and get instant access to the course materials!" },
];

function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='bg-gray-50 flex flex-col items-center px-4 sm:px-8'>
            <div className='mt-10 sm:mt-20'>
                <h1 className='text-3xl sm:text-5xl font-bold text-gray-800 text-center'>FAQs</h1>
            </div>
            <div className="w-full max-w-2xl mx-auto my-6 sm:my-10 p-4 sm:p-6">
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white p-3 sm:p-4 rounded-lg shadow-md cursor-pointer"
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-base sm:text-lg font-semibold">Q: {faq.question}</h3>
                                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                            </div>
                            {openIndex === index && (
                                <p className="mt-2 text-sm sm:text-base text-gray-700 whitespace-pre-line">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-6 sm:mt-10 flex justify-center w-full'>
                <Button className='rounded-2xl w-full max-w-xs sm:max-w-md text-xl sm:text-3xl px-6 sm:px-10 py-4 sm:py-8 text-white bg-gradient-to-r from-blue-800 via-blue-600 to-pink-600'>Let's get started</Button>
            </div>
            <div className='w-full flex flex-col items-center mt-10 sm:mt-20 mb-6 sm:mb-10'>
                <h1 className='text-2xl sm:text-4xl font-medium p-3 text-center'>Ready to Start Your Digital Art Journey?</h1>
                <h3 className='text-lg sm:text-2xl text-gray-800 font-medium text-center px-4'>Click below to secure your spot & start creating!</h3>
                <div className='mt-6 sm:mt-10 flex justify-center w-full'>
                    <Button className='rounded-2xl w-full max-w-xs sm:max-w-md text-xl sm:text-3xl px-6 sm:px-10 py-4 sm:py-8 text-white bg-gradient-to-r from-blue-800 via-blue-600 to-pink-600'>Book Now For ₹79 </Button>
                </div>
            </div>
        </div>
    );
}

export default Faq;