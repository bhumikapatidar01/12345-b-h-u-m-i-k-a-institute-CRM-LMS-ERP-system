import express from "express";
import employeeRoutes from "./module/employees/employees.routes.js";
import leadRoutes from "./module/leads/leads.routes.js";
import courseRoutes from "./module/courses/course.routes.js";
import batchRoutes from "./module/batches/batch.routes.js";
import admissionRoutes from "./module/admission/admission.routes.js";
import followupRoutes from "./module/followups/followup.routes.js";
import paymentRoutes from "./module/payments/payment.routes.js";
import subjectRoutes from "./module/lms/subjects/subject.routes.js";
import lessonRoutes from "./module/lms/lessons/lesson.routes.js";
import testRoutes from "./module/lms/tests/test.routes.js";

const app = express();

app.use(express.json());

// Routes
app.use("/api/employees", employeeRoutes);
app.use("/api/leads", leadRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/batches", batchRoutes);
app.use("/api/admissions", admissionRoutes);
app.use("/api/followups", followupRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/lessons", lessonRoutes);
app.use("/api/tests", testRoutes);

export default app;