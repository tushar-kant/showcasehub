// src/components/Statistics.js
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { id: 1, value: '1,000+', label: 'Projects Available' },
  { id: 2, value: '2,000+', label: 'Active Users' },
  { id: 3, value: '500+', label: 'Contributions Made' },
  { id: 4, value: '300+', label: 'Community Members' },
  { id: 5, value: '2,000+', label: 'Interview Questions' }, // New stat
  { id: 6, value: '1,00+', label: 'Ebooks Available' },      // New stat
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

const Statistics = () => {
  return (
    <motion.div
      className="container text-center my-5"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h2 className="mb-4">Our Impact</h2>
      <div className="row">
        {stats.map(stat => (
          <div className="col-md-4 mb-4" key={stat.id}>
            <div className="card p-3">
              <h3 className="font-weight-bold">{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Statistics;
