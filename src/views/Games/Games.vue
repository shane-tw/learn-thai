<template>
	<v-container fluid>
		<v-radio-group v-model="learningType">
			<template v-slot:label>
				Choose learning type
			</template>

			<v-radio label="Quizzes" value="quiz"></v-radio>
			<v-radio label="Flashcards" value="flashcard"></v-radio>
			<v-radio label="Freaking" value="freaking"></v-radio>
		</v-radio-group>

		<v-radio-group v-model="difficulty">
			<template v-slot:label>
				Difficulty
			</template>

			<v-radio label="Easy" value="easy"></v-radio>
			<v-radio label="Medium" value="medium"></v-radio>
			<v-radio label="Max" value="max"></v-radio>
		</v-radio-group>
	</v-container>
</template>
