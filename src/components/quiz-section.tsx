"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, X } from "lucide-react"

const quizQuestions = [
  {
    question: "What is Aleo's primary innovation?",
    options: [
      "Faster transaction speeds",
      "Zero-knowledge proofs for private computation",
      "Lower transaction fees",
      "Smart contract templates",
    ],
    correct: 1,
  },
  {
    question: "What programming language does Aleo use?",
    options: ["Solidity", "Rust", "Leo", "Python"],
    correct: 2,
  },
  {
    question: "What does Aleo enable developers to build?",
    options: [
      "Public-only applications",
      "Private, decentralized applications",
      "Centralized databases",
      "Mobile games",
    ],
    correct: 1,
  },
  {
    question: "What is the main benefit of zero-knowledge proofs?",
    options: ["Faster processing", "Lower costs", "Privacy without sacrificing verification", "Easier development"],
    correct: 2,
  },
]

export function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(quizQuestions.length).fill(false))

  const handleAnswer = (index: number) => {
    if (answeredQuestions[currentQuestion]) return

    setSelectedAnswer(index)
    const isCorrect = index === quizQuestions[currentQuestion].correct

    if (isCorrect) {
      setScore(score + 1)
    }

    const newAnswered = [...answeredQuestions]
    newAnswered[currentQuestion] = true
    setAnsweredQuestions(newAnswered)

    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
      } else {
        setShowResult(true)
      }
    }, 1500)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnsweredQuestions(new Array(quizQuestions.length).fill(false))
  }

  return (
    <section className="snap-section min-w-full h-full flex items-center justify-center p-4 md:p-8 lg:p-16 relative overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 md:w-48 md:h-48 rounded-full opacity-20"
        style={{ backgroundColor: "var(--aleo-yellow)" }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 md:w-56 md:h-56 rounded-full opacity-20"
        style={{ backgroundColor: "var(--aleo-mint)" }}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="max-w-3xl w-full z-10">
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-6 md:space-y-8"
            >
              <div className="text-center space-y-3 md:space-y-4">
                <motion.div
                  className="inline-block px-4 py-2 rounded-full text-sm md:text-base font-mono"
                  style={{ backgroundColor: "var(--aleo-pink)" }}
                >
                  Question {currentQuestion + 1} of {quizQuestions.length}
                </motion.div>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black">Test Your Knowledge</h2>
                <p className="text-lg md:text-2xl text-black/70 max-w-2xl mx-auto">
                  {quizQuestions[currentQuestion].question}
                </p>
              </div>

              <div className="grid gap-3 md:gap-4">
                {quizQuestions[currentQuestion].options.map((option, index) => {
                  const isSelected = selectedAnswer === index
                  const isCorrect = index === quizQuestions[currentQuestion].correct
                  const showFeedback = answeredQuestions[currentQuestion]

                  return (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      disabled={answeredQuestions[currentQuestion]}
                      className={`p-4 md:p-6 rounded-2xl text-left text-base md:text-lg font-medium transition-all duration-300 border-2 ${
                        showFeedback
                          ? isCorrect
                            ? "bg-[var(--aleo-mint)] border-[var(--aleo-mint)] text-black"
                            : isSelected
                              ? "bg-[var(--aleo-coral)] border-[var(--aleo-coral)] text-black"
                              : "bg-white border-black/10 text-black/50"
                          : "bg-white border-black/20 text-black hover:border-black hover:bg-black hover:text-white"
                      }`}
                      whileHover={!showFeedback ? { scale: 1.02 } : {}}
                      whileTap={!showFeedback ? { scale: 0.98 } : {}}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {showFeedback && isCorrect && <Check className="w-5 h-5 md:w-6 md:h-6" />}
                        {showFeedback && isSelected && !isCorrect && <X className="w-5 h-5 md:w-6 md:h-6" />}
                      </div>
                    </motion.button>
                  )
                })}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6 md:space-y-8"
            >
              <motion.div
                className="inline-block p-8 md:p-12 rounded-3xl"
                style={{
                  backgroundColor: score >= 3 ? "var(--aleo-mint)" : "var(--aleo-coral)",
                }}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="text-5xl md:text-7xl font-bold text-black mb-2 md:mb-4">
                  {score}/{quizQuestions.length}
                </div>
                <div className="text-xl md:text-2xl font-semibold text-black">
                  {score >= 3 ? "Excellent!" : "Good Try!"}
                </div>
              </motion.div>

              <div className="space-y-3 md:space-y-4">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black">
                  {score >= 3 ? "You're an Aleo Expert!" : "Keep Learning About Aleo"}
                </h2>
                <p className="text-base md:text-xl text-black/70 max-w-2xl mx-auto">
                  {score >= 3
                    ? "You have a great understanding of Aleo's technology and vision for private computation."
                    : "Explore more about Aleo to deepen your understanding of zero-knowledge proofs and private applications."}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <motion.button
                  onClick={resetQuiz}
                  className="px-6 md:px-8 py-3 md:py-4 rounded-full bg-black text-white text-base md:text-lg font-semibold hover:bg-[var(--aleo-yellow)] hover:text-black transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Try Again
                </motion.button>
                <motion.a
                  href="https://aleo.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 md:px-8 py-3 md:py-4 rounded-full bg-white border-2 border-black text-black text-base md:text-lg font-semibold hover:bg-black hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
