import React, { useEffect } from 'react';
import { useMembers } from '../hooks/useMembers';

export function Example () {

    const {members, getMembers} = useMembers();

    useEffect(() => {
        getMembers();
    }, []);

    return (
        <>
        {members.map((member) => {
            return (
                <div>
                    {member.firstName}
                </div>
            )
        })}
        </>
    )
}