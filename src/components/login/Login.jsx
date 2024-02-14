import React from 'react'

export default function Login() {
    return (
        <div className="join__form">
            <form action="/" method="post">
                <fieldset>
                    <legend className="blind">회원가입 영역</legend>
                    <div>
                        <label htmlFor="youEmail">이메일</label>
                        <input type="text" id="youEmail" name="youEmail" placeholder="이메일을 입력해주세요!" />
                    </div>
                    <div>
                        <label htmlFor="youPass">비밀번호</label>
                        <input type="text" id="youPass" name="youPass" placeholder="비밀번호를 입력해주세요!" />
                    </div>
                    <div className="join__btn">
                        <button>로그인</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}