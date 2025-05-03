const generateStars = (count: number) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const size = Math.random() * 3 + 2;
        const duration = 4 + Math.random() * 4;

        stars.push(
            <div
                key={i}
                className="star"
                style={{
                    left: `${left}%`,
                    top: `${Math.random() * 20}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`,
                }}
            />
        );
    }
    return stars;
};

export default generateStars