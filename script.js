document.addEventListener("DOMContentLoaded", () => {
   const quotes = [
    "Success is liking yourself, liking what you do, and liking how you do it. - Maya Angelou",
    "Aim for the moon. If you miss, you may hit a star. - W. Clement Stone",
    "If you cannot do great things, do small things in a great way. - Napoleon Hill",
    "Success only comes to those who dare to attempt. - Mallika Tripathi",
    "I never dreamed about success. I worked for it. - Estée Lauder",
    "If opportunity doesn't knock, build a door. - Milton Berle",
    "Change your thoughts and you change your world. - Norman Vincent Peale",
    "Success is a journey not a destination. - Ben Sweetland",
    "It always seems impossible until it's done. - Nelson Mandela",
      "We cannot solve problems with the kind of thinking we employed when we came up with them. — Albert Einstein",
      "Learn as if you will live forever, live like you will die tomorrow. — Mahatma Gandhi",
      "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too. — Mark Twain",
      "When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out. — Eleanor Roosevelt",
      "Success is not final; failure is not fatal: It is the courage to continue that counts. — Winston S. Churchill",
      "The road to success and the road to failure are almost exactly the same. — Colin R. Davis",
      "Success usually comes to those who are too busy looking for it. — Henry David Thoreau",
      "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success. —Dale Carnegie",
      "Nothing in the world can take the place of Persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. The slogan 'Press On' has solved and always will solve the problems of the human race. —Calvin Coolidge",
      "There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind. —Mister Rogers",
      "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you. — Steve Jobs",
      "Experience is a hard teacher because she gives the test first, the lesson afterwards. ―Vernon Sanders Law",
      "To know how much there is to know is the beginning of learning to live. —Dorothy West",
      "Goal setting is the secret to a compelling future. — Tony Robbins",
      "Concentrate all your thoughts upon the work in hand. The sun's rays do not burn until brought to a focus. — Alexander Graham Bell",
      "Either you run the day or the day runs you. — Jim Rohn",
      "I’m a greater believer in luck, and I find the harder I work the more I have of it. — Thomas Jefferson",
      "When we strive to become better than we are, everything around us becomes better too. — Paulo Coelho",
      "Opportunity is missed by most people because it is dressed in overalls and looks like work. — Thomas Edison",
      "Setting goals is the first step in turning the invisible into the visible. — Tony Robbins",
      "It/’s not about better time management. It’s about better life management — Alexandra of The Productivity Zone",
      
    // Add more quotes here
];
    const quoteElement = document.getElementById("quote");
    const generateButton = document.getElementById("generate-btn");

    generateButton.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.textContent = quotes[randomIndex];
    });
});
