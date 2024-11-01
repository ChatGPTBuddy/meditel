import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItem & { isOpen: boolean; toggle: () => void }> = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-md mb-4 overflow-hidden">
      <button
        className="flex justify-between items-center w-full text-left p-4 bg-white hover:bg-gray-50 transition-colors duration-200"
        onClick={toggle}
      >
        <h3 className="text-xl font-semibold text-gray-800">{question}</h3>
        {isOpen ? <ChevronUp className="flex-shrink-0 ml-2 text-blue-500" /> : <ChevronDown className="flex-shrink-0 ml-2 text-blue-500" />}
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-600 text-lg">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs: FAQItem[] = [
    {
      question: "How does the AI receptionist for dentists work?",
      answer: "Our AI receptionist uses advanced natural language processing to conduct patient conversations, schedule appointments, and answer common questions about your practice. The system continuously learns and adapts to the specific needs of your practice."
    },
    {
      question: "Is the system compatible with my existing dental software?",
      answer: "Yes, our AI receptionist is designed to integrate with the most popular dental practice management software. We also offer custom integrations if needed to ensure seamless operation with your existing systems."
    },
    {
      question: "How secure is patient data?",
      answer: "We take patient data security very seriously. Our system is HIPAA compliant and uses advanced encryption to protect all patient data. We also implement strict access controls and regular security audits."
    },
    {
      question: "Can the AI receptionist handle complex appointments?",
      answer: "Absolutely! Our AI is trained to handle complex scheduling scenarios, including appointments with multiple providers, different types of treatments, and specific patient requirements. The system optimizes scheduling to maximize your practice's efficiency."
    },
    {
      question: "How quickly can the AI receptionist be implemented in my practice?",
      answer: "Implementation time varies depending on the complexity of your practice and existing systems. Typically, we can have the system fully operational within a few days to a week. Our team guides you through the entire process to ensure a smooth transition."
    },
    {
      question: "Is technical support available if we need help?",
      answer: "Certainly! We provide technical support to ensure your AI receptionist is always functioning optimally. Our support team is ready to answer any questions or resolve any issues you may have."
    },
    {
      question: "Can the AI receptionist communicate in multiple languages?",
      answer: "Yes, our AI receptionist is multilingual and can communicate in various languages, including English, Spanish, French, and more. This allows for patient communication in their preferred language."
    },
    {
      question: "How does the AI receptionist learn about my specific practice?",
      answer: "During implementation, the AI goes through a training process where it learns information about your practice, procedures, and preferences. The system continues to learn and improve based on interactions and feedback, becoming increasingly tailored to your unique practice needs."
    },
    {
      question: "Can I monitor the performance of the AI receptionist?",
      answer: "Absolutely. We provide a comprehensive dashboard where you can get real-time insights into the AI receptionist's performance. You can view statistics on the number of calls handled, appointments scheduled, patient satisfaction, and more."
    },
    {
      question: "What happens if the AI can't answer a question?",
      answer: "In rare cases where the AI cannot answer a question, there's a seamless handoff to a human staff member. Moreover, the system learns from these situations to better respond to similar queries in the future."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prevOpenItems =>
      prevOpenItems.includes(index)
        ? prevOpenItems.filter(item => item !== index)
        : [...prevOpenItems, index]
    );
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 pt-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItems.includes(index)}
              toggle={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;