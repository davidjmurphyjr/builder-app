import {builder} from "@builder.io/sdk";
import Answers from "@/app/quiz/Answers";

export default async function Quiz() {
  builder.init('2fd0548bb2784e7ba96bc1ba990648d4')
  const { data: quiz } = await builder.get('quiz', {})
  const { data: question } = await builder.get('question', {})
  const answers = await builder.getAll('answer', {})

  return (
    <main className="min-h-screen p-24">
      <h1 className="text-6xl">Module</h1>
      <h2 className="text-5xl mt-8">Lesson</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id nulla sit amet orci lacinia laoreet
        vitae in diam. Integer bibendum mauris et arcu euismod vulputate. Phasellus auctor eget leo non dictum. Praesent
        porttitor lacus ante, eu vestibulum tortor malesuada id. Suspendisse consectetur augue quam. Integer et
        ultricies massa. Integer et sollicitudin dolor. Donec auctor pulvinar turpis, ac mattis diam. Donec mattis
        mattis elit maximus sagittis. Ut at augue in orci luctus aliquam vel id elit. Donec ac ex quis ante tristique
        euismod vitae ut orci. Maecenas ac scelerisque leo. Cras urna augue, varius eget interdum nec, consequat vel
        eros. Nulla tempor hendrerit mollis.
      </p>
      <h2 className="text-5xl mt-8">Lesson</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id nulla sit amet orci lacinia laoreet
        vitae in diam. Integer bibendum mauris et arcu euismod vulputate. Phasellus auctor eget leo non dictum. Praesent
        porttitor lacus ante, eu vestibulum tortor malesuada id. Suspendisse consectetur augue quam. Integer et
        ultricies massa. Integer et sollicitudin dolor. Donec auctor pulvinar turpis, ac mattis diam. Donec mattis
        mattis elit maximus sagittis. Ut at augue in orci luctus aliquam vel id elit. Donec ac ex quis ante tristique
        euismod vitae ut orci. Maecenas ac scelerisque leo. Cras urna augue, varius eget interdum nec, consequat vel
        eros. Nulla tempor hendrerit mollis.
      </p>
      <h2 className="text-5xl mt-8">Lesson</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id nulla sit amet orci lacinia laoreet
        vitae in diam. Integer bibendum mauris et arcu euismod vulputate. Phasellus auctor eget leo non dictum. Praesent
        porttitor lacus ante, eu vestibulum tortor malesuada id. Suspendisse consectetur augue quam. Integer et
        ultricies massa. Integer et sollicitudin dolor. Donec auctor pulvinar turpis, ac mattis diam. Donec mattis
        mattis elit maximus sagittis. Ut at augue in orci luctus aliquam vel id elit. Donec ac ex quis ante tristique
        euismod vitae ut orci. Maecenas ac scelerisque leo. Cras urna augue, varius eget interdum nec, consequat vel
        eros. Nulla tempor hendrerit mollis.
      </p>
      <h2 className="text-5xl mt-8">Summary</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id nulla sit amet orci lacinia laoreet
        vitae in diam. Integer bibendum mauris et arcu euismod vulputate. Phasellus auctor eget leo non dictum. Praesent
        porttitor lacus ante, eu vestibulum tortor malesuada id. Suspendisse consectetur augue quam. Integer et
        ultricies massa. Integer et sollicitudin dolor. Donec auctor pulvinar turpis, ac mattis diam. Donec mattis
        mattis elit maximus sagittis. Ut at augue in orci luctus aliquam vel id elit. Donec ac ex quis ante tristique
        euismod vitae ut orci. Maecenas ac scelerisque leo. Cras urna augue, varius eget interdum nec, consequat vel
        eros. Nulla tempor hendrerit mollis.
      </p>
      <h2 className="text-5xl mt-8">{quiz.name}</h2>
      <p className="mt-2">{question.description.Default}</p>
      <Answers answers={answers}/>
    </main>
  );
}
