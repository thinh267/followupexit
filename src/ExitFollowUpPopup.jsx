import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ExitFollowUpPopup() {
  const [show, setShow] = useState(false);

  const questions = [
    "1. Điều gì đã khiến bạn quan tâm tới khóa học Web Pentest ngay từ đầu?",
    "2. Điều gì khiến bạn đã dừng lại?",
    "3. Nếu 6 tháng tới, có kỹ năng mà bạn muốn làm chủ – bạn sẽ bắt đầu nó từ đâu?"
  ];

  const note = [
    "Không cần trả lời. Nhưng nếu bạn có câu trả lời – bạn cũng biết mình nên làm gì rồi.",
    "",
    "Mọi kỹ năng đều bắt đầu từ hành động đầu tiên. Nếu vẫn đang 'đợi thêm', hãy chắc là bạn đang đợi thứ đúng.",
    ""
  ];

  const finalLine = "Hack to learn. Not wait to hack. 🚀";

  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className=\"fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4\">
      <motion.div
        className=\"bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 space-y-4\"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className=\"text-xl font-bold text-gray-800\">Trước khi bạn đóng tab...</h2>
        <div className=\"space-y-2\">
          {questions.map((q, idx) => (
            <p key={idx} className=\"text-gray-700\">
              {q}
            </p>
          ))}
        </div>
        <div className=\"bg-gray-100 border-l-4 border-gray-400 p-4 text-sm italic text-gray-600 whitespace-pre-line\">
          {note.join("\n")}
          <motion.p
            className=\"mt-4 text-base font-medium not-italic text-black\"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            {finalLine}
          </motion.p>
          <p className=\"mt-2\">CyberJutsu team.</p>
        </div>
        <div className=\"pt-2 text-right\">
          <a
            href=\"https://learn.cyberjutsu.io/courses/web-pentest-demo\"
            target=\"_blank\"
            rel=\"noopener noreferrer\"
            className=\"text-xs text-gray-400 underline hover:text-gray-600\"
          >
            Bạn có thể thử khóa học demo ngay bây giờ. Không cần quyết định, chỉ cần bắt đầu.
          </a>
        </div>
      </motion.div>
    </div>
  );
}
