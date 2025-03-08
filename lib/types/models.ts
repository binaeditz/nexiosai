export interface Model {
  id: string
  name: string
  provider: string
  providerId: string
}

export const models: Model[] = [
  

  {
    id: 'accounts/fireworks/models/deepseek-r1',
    name: 'DeepSeek R1',
    provider: 'Fireworks',
    providerId: 'fireworks'
  },
  {
    id: 'deepseek-reasoner',
    name: 'DeepSeek R1',
    provider: 'DeepSeek',
    providerId: 'deepseek'
  },
  {
    id: 'deepseek-chat',
    name: 'DeepSeek V3',
    provider: 'DeepSeek',
    providerId: 'deepseek'
  },
  {
    id: 'gemini-2.0-pro-exp-02-05',
    name: 'Gemini 2.0 Pro (Exp)',
    provider: 'Google Generative AI',
    providerId: 'google'
  },

  {
    id: 'gemini-2.0-flash',
    name: 'Gemini 2.0 Flash',
    provider: 'Google Generative AI',
    providerId: 'google'
  },
  {
    id: 'deepseek-r1-distill-llama-70b',
    name: 'DeepSeek R1 Distill Llama 70B',
    provider: 'Groq',
    providerId: 'groq'
  },

 
]
