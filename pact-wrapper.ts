import { Pact, Interaction, InteractionObject } from '@pact-foundation/pact';
import * as path from 'path';

export class PactWrapper {
    private readonly provider: Pact;

    constructor(uniqueNameOfMyProvider: string) {
        this.provider = new Pact({
            //port: 8181,
            log: path.resolve(process.cwd(), 'pacts', 'logs', 'pact.log'),
            dir: path.resolve(process.cwd(), 'pacts'),
            spec: 3,
            logLevel: 'info',
            consumer: 'unique-name-of-my-spa',
            provider: uniqueNameOfMyProvider
        });
    }

    async init(): Promise<void> {
        try {
            await this.provider.setup();
        } catch (error) {
            console.error(error);
        }
    }

    async verify(): Promise<void> {
        try {
            await this.provider.verify();
        } catch (error) {
            console.error(error);
        }
    }

    async finalize(): Promise<void> {
        try {
            await this.provider.finalize();
        } catch (error) {
            console.error(error);
        }
    }

    async addInteraction(interaction: Interaction | InteractionObject): Promise<void> {
        try {
            await this.provider.addInteraction(interaction);
        } catch (error) {
            console.error(error);
        }
    }
}