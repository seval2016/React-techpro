import { deepseek } from '@ai-sdk/deepseek';
// @ts-ignore
import { streamText } from 'ai';

export async function POST(req: Request) {
    const { messages } = await req.json();

    const result = streamText({
        model: deepseek('deepseek-reasoner'),
        messages,
    });

    return result.toDataStreamResponse({
        sendReasoning: true,
    });
}