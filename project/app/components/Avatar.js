import React from 'react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
 

const Avatar = ({ user }) => {
    return (
        <div className="flex items-center gap-2">
        <img
            className="w-5 h-5 rounded-full"
            src={user.user_metadata.avatar_url}
            alt="profile picture"
        />
        </div>
    );
}
export default Avatar


