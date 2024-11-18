import { Injectable, Inject } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { usersData } from '../../../shared/interfaces/user.management';


@Injectable()
export class ManagementService {
    constructor(
        @Inject('SUPABASE_CLIENT') private supabase: SupabaseClient
    ) {}

    async getUsers():Promise<{data:usersData[]; error:any}> {
        const { data, error } = await this.supabase.from('users').select();
        return {data, error}
    }
}
