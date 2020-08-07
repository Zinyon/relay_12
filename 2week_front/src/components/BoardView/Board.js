import React from 'react';
import { deletePost } from "../../lib/api";
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import './style.css';
import { FaChevronLeft } from 'react-icons/fa';

const Board = ({ title, username, createdAt, body, key, history }) => {
  const handleUpdate = () => {
    // 상세 정보 수정 페이지로 이동
    console.log('수정');
  };

    const handleRemove = async (e) => {
        e.preventDefault();
        try {
            await deletePost(props.postId);
        } catch(err) {
            console.error(err.message);
        }
    }

    return (
        <>
            <div className="BoardView">
                <div className="title">
                    <h2>{props.title}</h2>
                </div>
                <div className="info">
                    <span>{props.username}</span>
                    <span>{props.createdAt}</span>
                </div>

                <div className="board">
                    <p>{props.body}</p>
                </div>
            </div>
            <Link to={{
                pathname: `/posts/update/${props.postId}`,
                state: {
                    title: props.title,
                    body: props.body
                },
            }}>
                <button>수정</button>
            </Link>
            <button onClick={handleRemove}>삭제</button>
        </>
    );
};

export default withRouter(Board);
