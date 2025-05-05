// Trả về ngày hôm nay dạng 'May 5'
export function getTodayFormatted(): string {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' };
  return now.toLocaleDateString('en-US', options);
}

export default getTodayFormatted;