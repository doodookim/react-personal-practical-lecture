import styled from 'styled-components';

import React, { useState } from 'react';
import { updateProfile } from 'redux/modules/api';
import { updateUser, setError } from 'redux/modules/userSlice';
import { useDispatch, useSelector } from 'react-redux';
function Profile() {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.accessToken);
  const [nickname, setNickname] = useState('');
  const [avatar, setAvatar] = useState(null);

  const profileHandler = async () => {
    try {
      const formData = new FormData();
      if (nickname) formData.append('nickname', nickname);
      if (avatar) formData.append('avatar', avatar);

      const response = await updateProfile(accessToken, formData);
      if (response.success) {
        dispatch(
          updateUser({ nickname: response.nickname, avatar: response.avatar })
        );
      } else {
        dispatch(setError(response.message));
      }
    } catch (error) {
      console.error('프로필업데이트에러', error);
    }
  };

  return <div>Profile</div>;
}

export default Profile;
