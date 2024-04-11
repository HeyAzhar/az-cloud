const resourceData = [
  {
    id: 0,
    title: "Elastic Compute Cloud (EC2)",
    total: 10,
    infoList: [
      { name: "Running Instances", count: 8 },
      { name: "EBS Volumes", count: 2 },
    ],
    item: ["abc EC2", "aefg-EC2", "aigk_EC2"],
  },
  {
    id: 1,
    title: "EBS Volumes",
    total: 15,
    infoList: [
      { name: "Service", count: 5 },
      { name: "Thread", count: 10 },
    ],
    item: ["abc EBS", "efg-EBS", "igk_EBS"],
  },
  {
    id: 2,
    title: "Simple Notification Service (SNS)",
    total: 20,
    infoList: [
      { name: "Delivered", count: 20 },
      { name: "Failed", count: 0 },
    ],
  },
  {
    id: 3,
    title: "Simple Queue Service (SQS)",
    total: 25,
    infoList: [
      { name: "Running", count: 22 },
      { name: "Down", count: 3 },
    ],
  },
  {
    id: 4,
    title: "Elastic Load Balancing (ELB)",
    total: 30,
    infoList: [
      { name: "Healthy Host", count: 29 },
      { name: "Unhealthy Host", count: 1 },
    ],
  },
  {
    id: 5,
    title: "Simple Storage Service (S3)",
    total: 40,
    infoList: [
      { name: "Buckets", count: 28 },
      { name: "Trash", count: 12 },
    ],
  },
];

const resourceChartData = resourceData.map(({ id, title, total }) => ({
  id,
  value: total,
  label: title,
}));

const resourceTitles = resourceData.map((item) => item.title);

export { resourceData, resourceTitles, resourceChartData };
