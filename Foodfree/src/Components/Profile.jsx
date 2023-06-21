function Profile() {


  let allergyType = 'لا'
  
    if (localStorage.getItem("haveAllergy") === "true") {
      allergyType = 'نعم'
    }
  
 

  return (
    <div>
      <div className="profileParent">
        <div>
          <div className="profileMenu">
            <div>
              <button>معلومات الحساب</button>
              <button>المفضلة</button>
              <button>حذف الحساب</button>
            </div>
          </div>
          <div className="profile">
            <form>
              <h1>الملف الشخصي</h1>
              <label>الاسم المستخدم : </label>
              <h2>{window.localStorage.getItem("FullUserName")}</h2>
              <label>الإيميل الالكتروني :</label>
              <h2>{window.localStorage.getItem("UserEmail")}</h2>
              <div className="selecter">
                هل أنت مصاب بحساسية :
                <h2>{allergyType}</h2>
              </div>
              <div className="checkboxParent">
                حدد الحساسية المصاب بها :
                <div className="checkbox">
                  <h2>{localStorage.getItem("")}</h2>
                </div>
              </div>
              <div className="submit_btn">
                <a href="/profileUpdate" className="edit">
                  
                  تعديل
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
