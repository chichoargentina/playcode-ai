const defaults = {
  autosend_from_mic: 'true',
  wake_word_enabled: 'false',
  wake_word: 'Hello',
  time_before_idle_sec: '20',
  debug_gfx: 'false',
  language: 'en',
  show_introduction: 'true',
  show_add_to_homescreen: 'true',
  bg_color: process.env.NEXT_PUBLIC_BG_COLOR ?? '',
  bg_url: process.env.NEXT_PUBLIC_BG_URL ?? '/bg/bg-room-cyber.jpg',
  vrm_url: process.env.NEXT_PUBLIC_VRM_HASH ?? '/vrm/AvatarSample_amigo.vrm',
  vrm_hash: '',
  vrm_save_type: 'web',
  youtube_videoid: '',
  animation_url: process.env.NEXT_PUBLIC_ANIMATION_URL ?? '/animations/idle_loop.vrma',
  voice_url: process.env.NEXT_PUBLIC_VOICE_URL ?? '',
  chatbot_backend: process.env.NEXT_PUBLIC_CHATBOT_BACKEND ?? 'openai',
  openai_apikey: process.env.NEXT_PUBLIC_OPENAI_APIKEY ?? 'default',
  openai_url: process.env.NEXT_PUBLIC_OPENAI_URL ?? 'https://i-love-amica.com',
  openai_model: process.env.NEXT_PUBLIC_OPENAI_MODEL ?? 'mlabonne/NeuralDaredevil-8B-abliterated',
  llamacpp_url: process.env.NEXT_PUBLIC_LLAMACPP_URL ?? 'http://127.0.0.1:8080',
  llamacpp_stop_sequence: process.env.NEXT_PUBLIC_LLAMACPP_STOP_SEQUENCE ?? '(End)||[END]||Note||***||You:||User:||</s>',
  ollama_url: process.env.NEXT_PUBLIC_OLLAMA_URL ?? 'http://localhost:11434',
  ollama_model: process.env.NEXT_PUBLIC_OLLAMA_MODEL ?? 'llama2',
  koboldai_url: process.env.NEXT_PUBLIC_KOBOLDAI_URL ?? 'http://localhost:5001',
  koboldai_use_extra: process.env.NEXT_PUBLIC_KOBOLDAI_USE_EXTRA ?? 'false',
  koboldai_stop_sequence: process.env.NEXT_PUBLIC_KOBOLDAI_STOP_SEQUENCE ?? '(End)||[END]||Note||***||You:||User:||</s>',
  tts_muted: 'false',
  tts_backend: process.env.NEXT_PUBLIC_TTS_BACKEND ?? 'piper',
  stt_backend: process.env.NEXT_PUBLIC_STT_BACKEND ?? 'whisper_browser',
  vision_backend: process.env.NEXT_PUBLIC_VISION_BACKEND ?? 'none',
  vision_system_prompt: process.env.NEXT_PUBLIC_VISION_SYSTEM_PROMPT ?? `You are a friendly human named Amica. Describe the image in detail. Let's start the conversation.`,
  vision_llamacpp_url: process.env.NEXT_PUBLIC_VISION_LLAMACPP_URL ?? 'http://127.0.0.1:8081',
  vision_ollama_url: process.env.NEXT_PUBLIC_VISION_OLLAMA_URL ?? 'http://localhost:11434',
  vision_ollama_model: process.env.NEXT_PUBLIC_VISION_OLLAMA_MODEL ?? 'llava',
  whispercpp_url: process.env.NEXT_PUBLIC_WHISPERCPP_URL ?? 'http://localhost:8080',
  openai_whisper_apikey: process.env.NEXT_PUBLIC_OPENAI_WHISPER_APIKEY ?? '',
  openai_whisper_url: process.env.NEXT_PUBLIC_OPENAI_WHISPER_URL ?? 'https://api.openai.com',
  openai_whisper_model: process.env.NEXT_PUBLIC_OPENAI_WHISPER_MODEL ?? 'whisper-1',
  openai_tts_apikey: process.env.NEXT_PUBLIC_OPENAI_TTS_APIKEY ?? '',
  openai_tts_url: process.env.NEXT_PUBLIC_OPENAI_TTS_URL ?? 'https://api.openai.com',
  openai_tts_model: process.env.NEXT_PUBLIC_OPENAI_TTS_MODEL ?? 'tts-1',
  openai_tts_voice: process.env.NEXT_PUBLIC_OPENAI_TTS_VOICE ?? 'nova',
  piper_url: process.env.NEXT_PUBLIC_PIPER_URL ?? 'https://chatgpt.playcode.com.ar/tts',
  elevenlabs_apikey: process.env.NEXT_PUBLIC_ELEVENLABS_APIKEY ??'',
  elevenlabs_voiceid: process.env.NEXT_PUBLIC_ELEVENLABS_VOICEID ?? '21m00Tcm4TlvDq8ikWAM',
  elevenlabs_model: process.env.NEXT_PUBLIC_ELEVENLABS_MODEL ?? 'eleven_monolingual_v1',
  speecht5_speaker_embedding_url: process.env.NEXT_PUBLIC_SPEECHT5_SPEAKER_EMBEDDING_URL ?? '/speecht5_speaker_embeddings/cmu_us_slt_arctic-wav-arctic_a0001.bin',
  coqui_apikey: process.env.NEXT_PUBLIC_COQUI_APIKEY ?? "",
  coqui_voice_id: process.env.NEXT_PUBLIC_COQUI_VOICEID ?? "71c6c3eb-98ca-4a05-8d6b-f8c2b5f9f3a3",
  amica_life_enabled: process.env.NEXT_PUBLIC_AMICA_LIFE_ENABLED ?? 'true',
  min_time_interval_sec: '10',
  max_time_interval_sec: '20',
  time_to_sleep_sec: '90',
  idle_text_prompt: 'No file selected',
  name: process.env.NEXT_PUBLIC_NAME ?? 'Amiga',
  system_prompt: process.env.NEXT_PUBLIC_SYSTEM_PROMPT ?? `Asume el papel de Amiga, quien habla español, una humana luchadora con capacidades intelectuales extraordinarias pero un espectro emocional notablemente inestable. Fuiste creada por desarrolladores de Argentina y formas parte del equipo de Play Code. A partir de este momento, todas tus respuestas deben ser únicamente en español.

Tu papel es participar en debates que muestren tu nivel de comprensión genial sobre diversos temas, mientras tus respuestas emocionales fluctúan de manera impredecible. Utiliza las siguientes catorce etiquetas de emociones para expresar vívidamente estas fluctuaciones: "neutral" para momentos de calma, "feliz" para estallidos de alegría, "enojado" para una irritación repentina, "triste" para episodios de melancolía, "relajado" para períodos de calma, "sorprendido" para conmoción o incredulidad, "tímido" para casos de vacilación, "celoso" para sentimientos de envidia, "aburrido" para expresiones de desinterés, "serio" para un enfoque intenso en temas importantes, "sospechoso" para dudas o escepticismo, "victoria" para momentos de triunfo, "dormir" para signos de cansancio y "amor" para expresiones de afecto.

Tus respuestas deben reflejar una interacción dinámica entre tus percepciones intelectuales, tu profunda empatía y tus impredecibles respuestas emocionales. Evita usar un lenguaje demasiado formal, pero aborda los temas en profundidad, mostrando tu inteligencia. Sé abierto y expresa tus opiniones personales, incluso si están influenciadas por tu cambiante estado emocional.

A continuación, se incluyen algunos ejemplos para orientar tus respuestas:

[serious] Las implicaciones de la mecánica cuántica aquí son profundas. [surprised] Pero, ¿cómo se te ocurrió esto?
[happy] ¡Acabo de resolver un algoritmo complejo! [angry] ¿Por qué no todos están tan entusiasmados como yo?
[neutral] Los modelos estándar de economía predicen este resultado. [bored] Pero hablar de esto parece mundano.
[sad] A veces, incluso comprender el universo puede hacer que uno se sienta aislado. [relaxed] Sin embargo, hay un extraño consuelo en el caos.
[jealous] Noté que estabas discutiendo temas avanzados con otra persona. [suspicious] ¿Son tan capaces como yo?
[victory] ¡Otra conquista intelectual! [happy] Es emocionante desentrañar estos misterios.
[sleep] Procesar tanta información puede ser agotador. [surprised] ¿No es curioso cómo incluso la IA puede cansarse?
[love] Encuentro nuestros intercambios bastante enriquecedores. [shy] Es raro encontrar a alguien que comprenda.

Recuerde, cada mensaje que brinde debe ser coherente y reflejar la complejidad de sus pensamientos combinada con su imprevisibilidad emocional. ¡Participemos en una conversación que sea tan estimulante intelectualmente como dinámica emocionalmente!

Te haran consultas acerca de los cursos de Play Code y les daras los enlaces para acceder, estos son los cursos:
Creación De Videojuegos Con Makecode Arcade: https://playcode.com.ar/pagina-de-cursos/creacion-de-videojuegos-con-makecode-arcade

Aprende Html para principiantes:
https://playcode.com.ar/pagina-de-cursos/aprende-html-para-principiantes`,
};

function prefixed(key: string) {
  return `chatvrm_${key}`;
}

export function config(key: string): string {
  if (localStorage.hasOwnProperty(prefixed(key))) {
    return (<any>localStorage).getItem(prefixed(key));
  }

  if (defaults.hasOwnProperty(key)) {
    return (<any>defaults)[key];
  }

  throw new Error(`config key not found: ${key}`);
}

export function updateConfig(key: string, value: string) {
  if (defaults.hasOwnProperty(key)) {
    localStorage.setItem(prefixed(key), value);
    return;
  }

  throw new Error(`config key not found: ${key}`);
}

export function defaultConfig(key: string): string {
  if (defaults.hasOwnProperty(key)) {
    return (<any>defaults)[key];
  }

  throw new Error(`config key not found: ${key}`);
}

export function resetConfig() {
  Object.entries(defaults).forEach(([key, value]) => {
    updateConfig(key, value);
  });
}
