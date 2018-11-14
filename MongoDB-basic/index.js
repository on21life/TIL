const mongoose = require("mongoose");

// 몽구스로 몽고디비 연결.
mongoose
  .connect(
    "mongodb://localhost/hello-mongo",
    { useNewUrlParser: true }
  )
  .then(() => console.log("connected to mongoDB"))
  .catch(error => console.error(error.message));

//가용 스키마 데이터타입:
// String, Number, Date, Buffer, Boolean, ObjectID, Array

// Validation 타입
// String: minlength, maxlength, match, enum
// Numbers, Dates: min, max
// All: required
const courseSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 1 },
  author: String,
  // tags: [ String ],
  tags: {
    type: Array,
    // custom Validator
    validate: {
      validator: function(tags) {
        const result = tags.every(tag => tag.length > 0)
        return tags && tags.length > 0 && result;
      },
      message: "A Course shold hava at least 1tag"
    }
  },
  date: { type: Date, default: Date.now },
  isPublished: Boolean
});

const Course = mongoose.model("Course", courseSchema);
// CRUD Operation
// Create
async function createCourse() {
  const course = new Course({
    name: "JS NOJS HTML CSS Learn",
    author: "YOON SUK HYUN",
    tags: ["yo", "yeah", "oh"],
    isPublished: true
  });

  // save는 커밋과 유사함.
  try {
    // const validate = course.validate()
    const result = await course.save();
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
  // npm i mongoose
}

createCourse();

async function getCourses() {
  // find로 찾고 limit로 갯수를 가져오고 sort로 정렬.
  // .find({})
  const courses = await Course;
  //.find({ price: { $lt: 15, $gt: 10 })
  //.find({ price: { $in: [10, 15] } })
  // .find({ isPublished: true })
  // .limit(10)
  // .sort({ name: -1 })
  // .select({ name: 1, tags: 1 })
  // .select('name tags')
  // .find({ author: /^ne/i })
  // .find({ author: /hn$/})
  // .find({ author: /.*oh.*/})
  // .count()
  console.log(courses);
}

// getCourses();

// 정규표현식
// 슬래쉬 두개는 정규표현식 시작과 끝을 뜻함
// ne로 시작하는것
// .find({ author:/^ne/ })
// hn으로 끝나는것
// .find({ author:/hn$/})
//앞뒤 상관없이 oh 있는것
// .find({ author:/.*oh.*/})

// 페이지네이션
// const pageNumber =req.query.pageNumber;
// const pageSize = req.query.pageIndex;
// const coureses = await Course
// .find()
// .skip().....

// 비교 쿼리 연산자
// $eq 같다
// $neq 안같다
// $gt 더 크다
// $gte 이상 greater than or equal to
// $lt 적다less than
// $lte 이하
// $in 범위
// $nin

// 논리 쿼리 연산자 .or
// Course
// .find()
// .or([{author:'neo}, {isPublished: false}])

// 논리 쿼리 연산자 .and
// Course .and
// .find()
// .and([{author:'neo}, {isPublished: false}])

// Update
// 1.Qurey First: find => change => save
async function updateCourse(id) {
  // find
  const course = await Course.findById(id);
  // 기본 생성되는 ObjectID형은 id와 완전 다르다.

  if (!course) return;

  // Change
  course.author = "석현";
  course.tags = ["???"];
  console.log(course);

  const rst = await course.save();
  console.log(rst);
}

// updateCourse("5a68fdc3615eda645bc6bdec");

// 2.Update First: 직접 Update => result

async function updateCourses(id) {
  // find (updateMany || updateOne || findByIdAndUpdate || findOneAndUpdate)
  const result = await Course.updateMany(
    { isPublished: true },
    {
      $set: {
        author: "석현"
      }
    }
  );
  console.log(result);
}
// updateCourses("5bea653504e7012538290c07");

// Destroy
async function removeCourse(id) {
  const result = await Course.deleteOne({ _id: id });
  // const result = await Course.findOneAndDelete();
  console.log(result);
}
// removeCourse("5bea653504e7012538290c07");
