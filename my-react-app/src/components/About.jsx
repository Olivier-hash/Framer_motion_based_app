import { useState } from 'react';
import { motion } from 'framer-motion';

function PhotoCard() {
  const [show, setShow] = useState(false);

  return (
    <div className="max-w-sm mx-auto p-4">
      <img
        src="https://via.placeholder.com/300"
        alt="Photo"
        className="cursor-pointer rounded shadow-lg hover:scale-105 transition-transform duration-300"
        onClick={() => setShow(!show)}
      />
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="mt-4 p-4 bg-gray-100 rounded shadow"
        >
          <p>This content appears with animation when you click the photo.</p>
        </motion.div>
      )}
    </div>
  );
}
