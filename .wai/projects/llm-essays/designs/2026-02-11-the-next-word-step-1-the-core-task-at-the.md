# The Next Word

### Step 1: The Core Task

At the heart of every large language model is a surprisingly simple task: predict the next word. It’s not answering a question or following a command. It is just guessing what comes next.

---

### Step 2: A Universe of Possibilities

Given a sequence of words, the model doesn't just pick one next word. Instead, it produces a probability score for every single word in its vast vocabulary—often over 100,000 words. In this moment, "is" might have a 40% chance, but "was" might have 12%, and even "fish" has a tiny, non-zero probability. The model's entire understanding of the world is expressed in this landscape of probabilities.

---

### Step 3: The Choice

From that vast list of possibilities, one word is chosen. This choice is probabilistic, not deterministic. While the most likely word is often picked, it's not guaranteed. This element of chance is a crucial source of the model's creativity and variety. Once the word is chosen, it's appended to the sequence, and the entire process begins again. Word by word, the response is built.

---

### Step 4: Temperature and Creativity

A setting called **temperature** controls how much the model adheres to its own predictions. At a low temperature, the model is cautious and conservative, almost always picking the most probable word. This is useful for factual recall. At a high temperature, it takes more risks, giving more weight to less likely words. This makes the output more creative, surprising, and sometimes, less coherent.

---

### Step 5: The Power of Context

How does the model calculate these probabilities? It reads the *entire* context provided so far—every word in the conversation—for every new word it generates. An internal mechanism called **attention** allows it to weigh which previous words are most relevant for predicting the next one. The model doesn't have "memory" in the human sense; it has context, and it re-reads that context every single time.

---

### Step 6: The Glorified Autocomplete?

So, is a large language model just a glorified autocomplete? Mechanically, yes. It is an engine for predicting the next token. But this framing misses the magic of scale. When you make a predictive engine powerful enough, and train it on a vast library of human culture, something remarkable emerges. To get better at predicting, the model has to get better at understanding the world.

---

### Step 7: Navigation

The simple act of predicting the next word, when scaled up, creates a universe of emergent behavior. But where does this behavior come from, and what does it mean to be the "average" of all text? How does this fundamental task of prediction challenge or expand your understanding of machine intelligence?

