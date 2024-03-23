const faqs = [
  {
    question: "Como faço para redefinir minha senha?",
    answer: 'Clique em "Esqueceu sua senha?" na página de login e siga as instruções.',
  },
  {
    question: "Quais são os métodos de pagamento aceitos?",
    answer: "Aceitamos Visa, Mastercard, American Express e Paypal.",
  },
  {
    question: "Qual é a política de reembolso?",
    answer:
      "Nosso objetivo é garantir a sua satisfação. Se você não estiver satisfeito com o nosso produto, aceitamos solicitações de reembolso até 30 dias após a compra. Entre em contato com o nosso suporte ao cliente.",
  },
  {
    question: "Como entro em contato com o suporte?",
    answer:
      "Você pode nos contatar pelo e-mail, telefone ou chat ao vivo. Visite a nossa página de suporte para mais informações.",
  },
];

function toggleAnswer(event) {
  const questionCard = event.currentTarget;

  const answer = questionCard.querySelector(".faq-container__answer");
  const icon = questionCard.querySelector(".faq-container__icon");

  if (answer.classList.contains("open")) {
    answer.classList.remove("open");
    icon.classList.remove("open");
  } else {
    answer.classList.add("open");
    icon.classList.add("open");
  }
}

window.onload = function () {
  const faqContainerList = document.querySelector(".faq-container__list");

  const questionCardTemplate = document.querySelector("#question-card");

  faqs.forEach((faq) => {
    const newFaqItem = document.importNode(questionCardTemplate.content, true);

    newFaqItem.querySelector(".faq-container__question-text").textContent = faq.question;
    newFaqItem.querySelector(".faq-container__answer").textContent = faq.answer;

    newFaqItem.querySelector(".faq-container__question-card").addEventListener("click", toggleAnswer);

    faqContainerList.appendChild(newFaqItem);
  });
};
