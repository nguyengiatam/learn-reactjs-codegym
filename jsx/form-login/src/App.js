import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="parent">
      <div className="fw-bold fs-2"> Đăng nhập</div>
      <div className="mb-3">
        <label forhtml="exampleInputEmail1" className="form-label">Email</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label forhtml="exampleInputPassword1" className="form-label">Mật khẩu</label>
        <input type="password" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="mb-3 note-login">
        <div className="note">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" forhtml="exampleCheck1">Ghi nhớ tôi</label>
        </div>
        <div className="note forgot-password">
          <span id='forgot-password' className="">Quên mật khẩu?</span>
        </div>
      </div>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button type="submit" className="btn btn-primary">Đăng nhập</button>
      </div>

    </div>
  );
}

export default App;
