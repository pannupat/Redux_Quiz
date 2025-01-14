interface Question {
  question: string;
  A: string;
  B: string;
  C: string;
  D: string;
  answer: string;
  [key: string]: string; 
}
const QuestionsData: Question[] = [
  {
    question: "ข้อใดไม่ใช่ tag html",
    A: "<kong>",
    B: "<a>",
    C: "<p>",
    D: "<h1>",
    answer: "A",  
  },
  {
    question: "ข้อใดถูกต้องเกี่ยวกับ React",
    A: "ทำงานฝั่ง Server",
    B: "ใช้จัดการฐานข้อมูล",
    C: "เป็น JavaScript Library",
    D: "ถูกทุกข้อ",
    answer: "C",
  },
  {
    question: "ข้อใดคือชื่อ Browser",
    A: "PHP",
    B: "React",
    C: "MySQL",
    D: "Chrome",
    answer: "D",
  },
  {
    question: "Border Style เป็นการกำหนดคุณสมบัติส่วนใด",
    A: "เส้นขอบ",
    B: "พื้นหลัง",
    C: "ขนาดข้อความ",
    D: "ถูกทุกข้อ",
    answer: "A",
  },
  {
    question: "ข้อใดคือ Semantic Element ใน HTML",
    A: "<article>",
    B: "<footer>",
    C: "<section>",
    D: "ถูกทุกข้อ",
    answer: "D",
  },
  {
    question: "ข้อใดต่อไปนี้เป็นหลักการ A flexible, grid-based layout",
    A: "กำหนด Grid เป็นแบบ Relative คือ ยืดหยุ่นได้",
    B: "กำหนด Font-size จากหน่วย px เป็นหน่วย em",
    C: "กำหนดความกว้างหรือระยะห่างของสิ่งต่าง ๆ จากหน่วย px เป็น %",
    D: "ถูกทุกข้อ",
    answer: "D",
  },
  {
    question: "ข้อใดอธิบายความหมายของ CSS Framework ได้ถูกต้องที่สุด",
    A: "โครงสร้างของ CSS ที่มีกรอบการทำงานชัดเจนเพื่อใช้เริ่มต้นการออกแบบและพัฒนาเว็บไซต์ correct",
    B: "โปรแกรมสำเร็จรูปสำหรับออกแบบและพัฒนาเว็บไซต์",
    C: "ใช้ในการตกแต่งส่วนติดต่อผู้ใช้ให้สวยงาม",
    D: "ถูกทุกข้อ",
    answer: "A",
  },
  {
    question: "ข้อใดไม่ใช่เครื่องมือในการแสดงผลเว็บไซต์ (Web browser)",
    A: "FileZilla",
    B: "Google Chrome",
    C: "Safari",
    D: "ถูกทุกข้อ",
    answer: "A",
  },
  {
    question: "ข้อใดกล่าวไม่ถูกต้องเกี่ยวกับ Bootstrap",
    A: "มี CSS component และ JavaScript plugin ให้เรียกใช้งาน",
    B: "ช่วยให้สามารถสร้างเว็บไซต์ได้อย่างรวดเร็วและสวยงาม",
    C: "มี CSS component และ JavaScript plugin ให้เรียกใช้งาน",
    D: "มี license หากจะใช้ต้องจ่ายเงิน",
    answer: "D",
  },
  {
    question: "ข้อใดกล่าวไม่ถูกต้องเกี่ยวกับ Bootstrap",
    A: "มีการติดต่อฐานข้อมูล",
    B: "ช่วยให้สามารถสร้างเว็บไซต์ได้อย่างรวดเร็วและสวยงาม",
    C: "มี CSS component และ JavaScript plugin ให้เรียกใช้งาน",
    D: "พัฒนาด้วย HTML เพียงภาษาเดียว correct",
    answer: "D",
  },
];

export default QuestionsData;
