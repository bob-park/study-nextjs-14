'use client';

import cx from 'classnames';

// timeago
import TimeAgo from 'timeago-react';
import { register } from 'timeago.js';
import ko from 'timeago.js/lib/lang/ko';

register('ko', ko);

type ChatMessageProps = {
  id: string;
  user: {
    id: string;
    nickname: string;
    avatar: string;
  };
  content: string;
  date: Date;
  isMe: boolean;
};

export default function ChatMessage({
  id,
  user,
  content,
  date,
  isMe,
}: ChatMessageProps) {
  return (
    <div className="w-full">
      <div className={cx('chat', isMe ? 'chat-end' : 'chat-start')}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={user.avatar} />
          </div>
        </div>
        <div className="chat-header">
          <p>{isMe ? '나' : user.nickname}</p>
        </div>
        <div
          className={cx(
            'chat-bubble',
            isMe ? 'chat-bubble-primary' : 'bg-base-300 text-black',
          )}
        >
          <p className="">{content}</p>
        </div>
        <div className="chat-footer opacity-50">
          <TimeAgo datetime={date} locale="ko" />
        </div>
      </div>
    </div>
  );
}
