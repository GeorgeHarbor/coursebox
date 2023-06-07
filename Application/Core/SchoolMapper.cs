using System.Dynamic;
using System.Reflection;
using Application.DTOs;
using Domain;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using Persistence;

namespace Application.Core;

public class SchoolMapper
{
    private readonly DataContext _context;

    public SchoolMapper(DataContext context)
    {
        _context = context;
    }

    public async Task<SchoolDto> SchoolToSchoolDto(School school)
    {
        Type schoolType = typeof(School);
        Type schoolDtoType = typeof(SchoolDto);
        PropertyInfo[] schoolProperties = schoolType.GetProperties();
        PropertyInfo[] schoolDtoProperties = schoolDtoType.GetProperties();

        SchoolDto schoolDto = new();

        foreach (var schoolProperty in schoolProperties)
        {
            var destinationProperty = schoolDtoProperties.FirstOrDefault(x => x.Name == schoolProperty.Name);

            if (destinationProperty is null) throw new Exception("Properties not matching");

            var value = schoolProperty.GetValue(school);

            if (destinationProperty.Name == "Courses")
            {
                List<string> ids = (schoolProperty.GetValue(school) as List<string>)!;
                List<Course> courses = await _context.Courses.Find(x => ids.Contains(x.Id!)).ToListAsync();
                List<object> result = new();
                foreach (var course in courses)
                {
                    dynamic c = new ExpandoObject();
                    c.Name = course.Name;
                    c.Description = course.Description;
                    c.Duration = course.Duration;
                    c.Rating = course.Rating;
                    c.Image = course.Image;
                    c.Instructods = course.Instructors;
                    c.Keywords = course.Keywords;
                    c.Link = course.Link;
                    
                    result.Add(c);
                }

                value = result;
            }

            if (destinationProperty.Name == "Id")
            {
                value = value.ToString();
            }

            destinationProperty.SetValue(schoolDto, value);
        }

        return schoolDto;
    }

    public School SchoolToSchool(School school, School newSchool)
    {
        Type schoolType = typeof(School);
        PropertyInfo[] propertyInfos = schoolType.GetProperties();

        foreach (var info in propertyInfos)
        {
            var value = info.GetValue(newSchool);

            // if (info.Name == "Courses" )
            // {
            //     var ogCourses = info.GetValue(school) as List<string>;
            //     var newCourses = info.GetValue(newSchool) as List<string>;
            //
            //     if (ogCourses != newCourses && ogCourses != null && newCourses != null)
            //     {
            //         var coursesToRemove = ogCourses.Except(newCourses).ToList();
            //         var coursesToAdd = newCourses.Except(ogCourses).ToList();
            //
            //         if (coursesToRemove.Count > 0)
            //         {
            //             
            //         } 
            //     }
            // }
            
            
            if (value != null  && info.Name != "Id" && info.Name != "Courses")
            {
                info.SetValue(school, value);
            }
        }

        return school;
    }
}