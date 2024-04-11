// react-icons
import { IoSettingsOutline, IoSearchSharp } from 'react-icons/io5';
import { BiMessageAdd } from 'react-icons/bi';

// component
import Room from '../_component/Room';

const dummyData = [
  {
    id: 'room-id1',
    user: {
      id: 'hero',
      nickname: '영웅',
      avatar: '',
    },
    lastMessage: {
      id: 'new-1',
      content: '안녕하세요',
      createdDate: new Date(),
    },
  },
  {
    id: 'room-id2',
    user: {
      id: 'hero',
      nickname: '영웅',
      avatar: '',
    },
    lastMessage: {
      id: 'new-1',
      content: '안녕하세요',
      createdDate: new Date(),
    },
  },
  {
    id: 'room-id3',
    user: {
      id: 'hero',
      nickname: '영웅',
      avatar: '',
    },
    lastMessage: {
      id: 'new-1',
      content: '안녕하세요',
      createdDate: new Date(),
    },
  },
];

export default function MessagePage() {
  return (
    <main className="flex flex-col min-h-screen p-3">
      <div className="flex-none h-12">
        <div className="flex flex-row gap-2 justify-between items-center">
          <p className="text-2xl font-bold">
            <span>쪽지</span>
          </p>
          <div className="">
            <button className="btn btn-ghost btn-circle" type="button">
              <IoSettingsOutline className="w-6 h-6" />
            </button>
            <button className="btn btn-ghost btn-circle" type="button">
              <BiMessageAdd className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* search */}
      <div className="flex-none h-14">
        <form className="sticky top-0 mb-6 w-full">
          <label className="input input-bordered flex items-center gap-2 m-1 mt-2 rounded-full">
            <IoSearchSharp className="w-6 h-6" />
            <input type="text" className="grow" placeholder="쪽지 검색하기" />
          </label>
        </form>
      </div>

      {/* messages */}
      <div className="flex-1 mt-2 w-full min-h-screen">
        {dummyData.map((item) => (
          <div key={`message-key-${item.user.id}`} className="">
            <Room id={item.id} user={item.user} contents={item.lastMessage} />
          </div>
        ))}
      </div>
    </main>
  );
}
