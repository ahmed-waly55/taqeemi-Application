import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-exam',
  imports: [],
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.css'
})
export class ExamComponent {
currentStep = signal('subjects');
  currentQuestionIndex = signal(0);
  userAnswers = signal<number[]>([]);
  timeLeft = signal(600);
  timerInterval: any;

  quizQuestions = signal([
    { question: "ما هو العنصر الكيميائي الذي يمثله الرمز O؟", options: ["الذهب", "الأكسجين", "الحديد", "النحاس"], correct: 1 },
    { question: "أي من الكواكب التالية يعتبر الكوكب الأحمر؟", options: ["المشتري", "الزهرة", "المريخ", "زحل"], correct: 2 },
    { question: "ما هي وحدة قياس القوة في النظام الدولي؟", options: ["الوات", "الجول", "النيوتن", "الفولت"], correct: 2 },
    { question: "ما هي المادة التي تشكل أغلب الغلاف الجوي للأرض؟", options: ["الأكسجين", "النيتروجين", "ثاني أكسيد الكربون", "الهيدروجين"], correct: 1 },
    { question: "ما هو العضو المسؤول عن ضخ الدم في جسم الإنسان؟", options: ["الرئة", "الكبد", "المخ", "القلب"], correct: 3 }
  ]);

  formattedTime = computed(() => {
    const minutes = Math.floor(this.timeLeft() / 60);
    const seconds = this.timeLeft() % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  });

  finalScore = computed(() => {
    let correctCount = 0;
    this.userAnswers().forEach((answer, index) => {
      if (answer === this.quizQuestions()[index].correct) correctCount++;
    });
    return (correctCount / this.quizQuestions().length) * 100;
  });

  // دوال التحكم في المراحل
  selectSubject() {
    this.currentStep.set('difficulty');
  }

  selectDifficulty() {
    this.currentStep.set('quiz');
    this.userAnswers.set(new Array(this.quizQuestions().length).fill(-1));
    this.startTimer();
  }

  prevQuestion() {
    if (this.currentQuestionIndex() > 0) {
      this.currentQuestionIndex.update(v => v - 1);
    }
  }

  nextQuestion() {
    if (this.currentQuestionIndex() < this.quizQuestions().length - 1) {
      this.currentQuestionIndex.update(v => v + 1);
    } else {
      this.finishQuiz();
    }
  }

  selectOption(index: number) {
    const answers = [...this.userAnswers()];
    answers[this.currentQuestionIndex()] = index;
    this.userAnswers.set(answers);
  }

  finishQuiz() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.currentStep.set('result');
  }

  resetAll() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.currentStep.set('subjects');
    this.currentQuestionIndex.set(0);
    this.timeLeft.set(600);
  }

  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      if (this.timeLeft() > 0) {
        this.timeLeft.update(t => t - 1);
      } else {
        this.finishQuiz();
      }
    }, 1000);
  }

  ngOnDestroy() {
    if (this.timerInterval) clearInterval(this.timerInterval);
  }
}
