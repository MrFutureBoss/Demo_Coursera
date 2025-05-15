import db from "../services/db.js";


export const getClassesAndCourseForParticipant = async (userId, filter, offset, limit) => {
  const [rows] = await db.query(
    `SELECT 
    ec.id, 
    ec.code, 
    ec.course_id, 
    ec.duration, 
    ec.start_date, 
    ec.end_date, 
    ec.instructor,
    ec.participants, 
    ec.status as class_status,
    ec2.version,
    ec2.language, 
    ec2.type, 
    ec2.banner, 
    ec2.certificate, 
    ec2.description, 
    ec2.start_time as course_start_time, 
    ec2.end_time as course_end_time, 
    ec2.overview, 
    ec2.team, 
    ec2.team_group, 
    ec2.topic_name,
    ec.updated_at,
    ec.updated_by
  FROM 
    elearning.e_class ec
    JOIN elearning.e_course ec2 ON ec2.id = ec.course_id
  WHERE 
    ec2.status = 'Publish'
  AND 
  ${filter === null ? "" : `ec.status = ?`}
  ${limit === null ? "" : `LIMIT ?`} ${offset === null ? "" : `OFFSET ?`}
    `
    , [filter === null ? null : filter, limit === null ? null : limit, offset === null ? null : offset]
);
  if (!rows || rows.length === 0) return [];
  const filteredRows = rows.filter(row => {
    if (!row.participants) return false;
    let participantsArr;
    if (typeof row.participants === "string") {
      try {
        participantsArr = JSON.parse(row.participants);
      } catch {
        participantsArr = row.participants.split(",").map(p => p.trim());
      }
    } else if (Array.isArray(row.participants)) {
      participantsArr = row.participants;
    } else {
      return false;
    }
    console.log("userId:", userId);
    // console.log("participantsArr:", participantsArr.includes(String(userId)));    
    return participantsArr.includes(String(userId));
  });

  return filteredRows;
};
