# The Shaping

### Step 1: The Raw Engine

A base model, fresh from pretraining, is a powerful but aimless engine. It has learned the statistical patterns of language, but it hasn't learned the patterns of conversation. If you ask it a question, it might answer you, but it's just as likely to generate more questions, or a list of related topics, or a forum post debating the question. It is a completion engine, not a conversational partner.

---

### Step 2: The First Polish (Fine-Tuning)

The first step in "shaping" this raw engine is **Supervised Fine-Tuning (SFT)**. The model is trained further, but this time on a much smaller, higher-quality dataset of curated instruction-and-response pairs. This is where it learns the format of a conversation: turn-taking, following instructions, and answering questions directly. It's like teaching the model good manners.

---

### Step 3: Defining "Better" (Reinforcement Learning)

After fine-tuning, the model is shaped further using **Reinforcement Learning from Human Feedback (RLHF)**. Human raters are shown the same prompt with two different model responses and simply choose which one they prefer. A separate "reward model" is trained to predict which responses the humans will like. This reward model then acts as an automated guide, "rewarding" the main model for producing answers that are more helpful, honest, and harmless.

---

### Step 4: Before and After

The difference is dramatic. The same base model can be shaped into a dozen different "personalities" with different strengths and weaknesses. The underlying knowledge learned during pretraining remains the same, but RLHF changes how that knowledge is accessed and presented. It's the difference between a raw database and a skilled librarian who knows how to find exactly what you need.

---

### Step 5: An Ongoing Conversation

This shaping process is not a one-time event. It is an ongoing conversation between developers, users, and the models themselves. As new techniques like Constitutional AI emerge and as we get better at defining what "quality" means, the models will continue to evolve. The shaping never truly stops.

