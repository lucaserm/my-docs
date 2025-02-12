import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.css';

const Game = () => {
  const [isJumping, setIsJumping] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const dinoRef = useRef(null);
  const cactusRef = useRef(null);

  const handleKeyPress = (event) => {
    if (event.key === ' ') {
      jump();
    }
  };

  const jump = () => {
    if (isJumping) return;

    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 500);  // A duração do salto
  };

  const moveCactus = () => {
    if (gameOver) return;

    const cactus = cactusRef.current;
    const dino = dinoRef.current;
    const dinoTop = dino.getBoundingClientRect().top;
    const cactusLeft = cactus.getBoundingClientRect().left;
    const cactusWidth = cactus.getBoundingClientRect().width;

    // Detectando colisão
    if (
      cactusLeft < dino.getBoundingClientRect().right &&
      cactusLeft + cactusWidth > dino.getBoundingClientRect().left &&
      dinoTop > 120 &&
      !isJumping
    ) {
      setGameOver(true);
      return;
    }

    // Movendo o cacto
    if (!gameOver) {
      cactus.style.left = `${cactusLeft - 5}px`;
      if (cactusLeft < -50) {
        setScore(score + 1);
        cactus.style.left = '100vw';  // Resetando a posição do cacto
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    const interval = setInterval(() => {
      moveCactus();
    }, 20); // Atualiza a posição do cacto a cada 20ms

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      clearInterval(interval);
    };
  }, [isJumping, score, gameOver]);

  return (
    <div className={styles.gameContainer}>
      <div className={`${styles.dino} ${isJumping ? styles.jumping : ''}`} ref={dinoRef}></div>
      <div className={styles.cactus} ref={cactusRef}></div>
      {gameOver && <div className={styles.gameOver}>Game Over!</div>}
      <div className={styles.score}>Score: {score}</div>
    </div>
  );
};

export default Game;
